import * as yup from 'yup';

export const commentSchema = yup.object().shape({
  comment: yup.string().required('Comment is required'),
  author_name: yup.string().required('Author name is required'),
  avatar: yup.string().required('Avatar is required'),
  profile_url: yup.string().required('Profile url is required'),
});

