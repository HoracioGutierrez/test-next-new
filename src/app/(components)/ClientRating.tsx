"use client"

import { Rating } from "react-simple-star-rating";

export default function ClientRating({ rate }: { rate: number }) {
  return (
    <Rating initialValue={rate} readonly size={20} />
  )
}
