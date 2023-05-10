"use client"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import { commentSchema } from "@/utils/yupValidations";
import { generateReactHelpers } from "@uploadthing/react";
import { Rating } from "react-simple-star-rating";
import { useState } from "react";
import { createComent } from "@/utils/dbMethods";

type Props = {}
export default function NewCommentContent({ }: Props) {

  const [rate, setRate] = useState(5)

  const { useUploadThing , uploadFiles } = generateReactHelpers()

  const { files, getInputProps, startUpload, getRootProps, resetFiles } = useUploadThing("imageUploader")

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(commentSchema)
  })

  const onSubmit = (data: any) => {
    startUpload()
    .then(([file])=>{
      
      const new_comment = {
        ...data,
        rate,
        avatar : file.fileUrl
      }

      createComent(new_comment)
    })
    .catch(err=>{
      console.log(err[0].error)
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="author_name" className="text-sm font-medium text-gray-400">Nombre <span className="text-red-500">*</span> </label>
          <input {...register("author_name")} name="author_name" type="text" id="author_name" placeholder="Juan Carlos" className="w-full p-2 border-2 border-gray-300 rounded-md outline-none" />
          {errors.author_name && <span className="text-red-500 text-sm">{errors.author_name.message}</span>}
        </div>

        <div {...getRootProps()} className="mt-4">
          <p className="text-sm font-medium text-gray-400">Avatar</p>
          <input type="file" {...getInputProps({ multiple: false , id : "avatar" , ...register("avatar") })} id="avatar" name="avatar" />
          {files.length > 0
            ? <div className="text-sm text-gray-400 text-center mt-2 mb-4 cursor-pointer hover:text-gray-600 transition-colors duration-200 ease-in-out border-2 border-dashed border-gray-300 rounded-md p-2 outline-none flex items-center justify-center flex-col">
              <img src={files[0].contents} alt="" className="h-20 w-20 rounded-full" />
              <br />
              <span className="text-xs">{files[0].file.name}</span>
              <br />
              <button onClick={() => resetFiles()} className="text-xs text-red-500">Eliminar</button>
            </div>
            : <label htmlFor="avatar" className="text-sm text-gray-400 text-center mt-2 mb-4 cursor-pointer hover:text-gray-600 transition-colors duration-200 ease-in-out border-2 border-dashed border-gray-300 rounded-md p-2 outline-none h-20 flex items-center justify-center">Arrastre una imagen aqui <br />o <br /> haga click para seleccionar una manualmente</label>
          }
        </div>

        <div className="mt-4">
          <label htmlFor="rating" className="text-sm font-medium text-gray-400">Rating <span className="text-red-500">*</span></label>
          <p className="text-xs text-gray-400">Cuantos puntos me darias en base a anda a saber que (?</p>
          <div className="w-full h-12 mt-2">
            <Rating
              onClick={rating => setRate(rating)}
              style={{ width: "100%" }}
              initialValue={rate}
            />
          </div>
        </div>

        <div>
          <label htmlFor="profile_url" className="text-sm font-medium text-gray-400">URL de perfil</label>
          <input {...register("profile_url")} name="profile_url" type="url" id="profile_url" placeholder="https://..." className="w-full p-2 border-2 border-gray-300 rounded-md outline-none" />
        </div>

        <div className="mt-4">
          <label htmlFor="comment" className="text-sm font-medium text-gray-400">Comentario <span className="text-red-500">*</span></label>
          <textarea {...register("comment")} id="comment" name="comment" placeholder="Sos un groso! ... " className="w-full h-36 p-2 border-2 border-gray-300 rounded-md outline-none resize-none" />
          {errors.comment && <span className="text-red-500 text-sm">{errors.comment.message}</span>}
        </div>
        <button type="submit" className="bg-slate-600 text-white p-2 mt-4 rounded block w-fit ml-auto">guardar</button>
      </form>
    </>
  )
}