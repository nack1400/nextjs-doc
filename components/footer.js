import { Progress } from "@material-tailwind/react";
import variables from '../styles/variables.module.scss'

export default function Footer() {
  return (
    <>
      <hr />
      <hr />
      <h1 style={{color : variables.primaryColor}}>FOOTER</h1>
      <div className="flex w-full flex-col gap-4">
        <Progress value={50} color="blue" />
        <Progress value={60} color="red" />
        <Progress value={70} color="green" />
        <Progress value={80} color="amber" />
        <Progress value={90} color="teal" />
        <Progress value={100} color="indigo" />
        <Progress value={40} color="purple" />
        <Progress value={30} color="pink" />
      </div>
    </>
  );
}
