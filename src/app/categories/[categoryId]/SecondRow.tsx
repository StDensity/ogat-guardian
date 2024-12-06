import VerticalArticleCard from '@/components/news-cards/VerticalArticleCard'
import { newsDataType } from '@/types/contentful'
import React from 'react'

interface SecondRowProps {
    categoryNews: newsDataType[]
}

const SecondRow = (props: SecondRowProps) => {
  return (
    <div className="mt-7 grid-cols-4 grid justify-between border-t-2 pt-1">
      {props.categoryNews.map(item => {
        return <div key={item.id}>
            <VerticalArticleCard newsData={item} />
        </div>
      })}
    </div>
  )
}

export default SecondRow