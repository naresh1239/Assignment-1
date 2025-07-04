import React from 'react'
import type { CardDataType } from './types'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"


type Props = {
  data: CardDataType[];
};

const Cards = ({ data }: Props) => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((item: CardDataType) => (
          <Card key={item.id}>
            <CardHeader className="flex flex-row items-center gap-4">
              <img width={"100px"} height={"100px"} src={`https://api.dicebear.com/9.x/adventurer/svg?seed=${item.username}`} alt='image'/>
              <CardTitle className="text-lg">{item.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-1 text-sm text-muted-foreground">
              <p><strong>Username:</strong> {item.username}</p>
              <p><strong>Email:</strong> {item.email}</p>
              <p><strong>Phone:</strong> {item.phone}</p>
              <p><strong>Website:</strong> {item.website}</p>
              <p><strong>Company:</strong> {item.company.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Cards
