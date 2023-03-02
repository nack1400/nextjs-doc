import {
  Textarea,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import Image from 'next/image';

export default function Home() {
  return (
    <div className='flex p-10'>
      <div className="flex-1 m-5">
        <Card className="w-96">
          <CardHeader floated={false} className="h-80">
            <Image src="/img/img1.jpg" alt="profile-picture" width={400} height={400} />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Rakhyun kwon
            </Typography>
            <Typography color="blue" className="font-medium" textGradient>
              IT
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-7 pt-2">
            <Tooltip content="Like">
              <Typography
                as="a"
                href="#facebook"
                variant="lead"
                color="blue"
                textGradient
              >
                <i className="fab fa-facebook" />
              </Typography>
            </Tooltip>
            <Tooltip content="Follow">
              <Typography
                as="a"
                href="#twitter"
                variant="lead"
                color="light-blue"
                textGradient
              >
                <i className="fab fa-twitter" />
              </Typography>
            </Tooltip>
            <Tooltip content="Follow">
              <Typography
                as="a"
                href="#instagram"
                variant="lead"
                color="purple"
                textGradient
              >
                <i className="fab fa-instagram" />
              </Typography>
            </Tooltip>
          </CardFooter>
        </Card>
      </div>
      <div className="flex-1 m-5 flex-col w-96 gap-6">
        <Textarea variant="static" label="Static" placeholder="Static" />
        <Textarea variant="standard" label="Standard" />
        <Textarea variant="outlined" label="Outlined" />
      </div>
    </div>
  );
}
