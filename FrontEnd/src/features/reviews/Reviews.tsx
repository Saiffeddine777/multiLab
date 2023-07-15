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
    <div>Reviews</div>
    {reviews.reviews.map((e,i)=>{
        return (
            <>
            <p>{e.reviewerName}</p>
            <p>{e.text}</p>
            <p>{e.rating}</p>
            </>
        )
    })}
    </>
  )
}

