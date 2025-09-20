import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { getReviews } from './Reviews-api-slice'

export default function Reviews() {
  const reviews = useAppSelector(state =>state.reviews)
  const dispatch = useAppDispatch()
  React.useEffect(()=>{
      dispatch(getReviews())
  },[dispatch])
  return (
    <>
<div className="p-4 bg-white rounded-lg mt-10">
  <div className="text-3xl font-semibold mb-4 greycliffcf-extrabold text-black">Reviews</div>
  {reviews.reviews.map((review, index) => (
    <div key={index} className="border rounded-lg p-4 mb-4 group hover:bg-blue-200 transition duration-400">
      <p className="text-black greycliffcf-semibold">{review.reviewerName}</p>
      <p className="text-gray-800 greycliffcf-lightoblique">{review.text}</p>
      <p className="text-blue-500 greycliffcf-semibold">Rating: {review.rating}</p>
    </div>
  ))}
</div>

    </>
  )
}

