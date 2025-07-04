
import type { CardDataType } from './types'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../components/ui/card"


type Props = {
  data: CardDataType[];
};

const Cards = ({ data }: Props) => {
  return (
    <div className="p-4">
      <div className="gap-3 mx-40">
        {data.map((item: CardDataType) => (
          <Card key={item.id} className='mb-5 flex flex-row items-center '>
            {/* <CardHeader className=""> */}
              <img width={"200px"} height={"100px"} src={`https://api.dicebear.com/9.x/adventurer/svg?seed=${item.username}`} alt='image'/>
            {/* </CardHeader> */}
            <CardContent className="space-y-1 text-sm text-muted-foreground">
            <CardTitle className="text-lg">{item.name}</CardTitle>
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
