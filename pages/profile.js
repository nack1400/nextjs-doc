import { useState, useEffect } from 'react'
import useSWR from 'swr';
import axios from 'axios';

const fetcher = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

export default function Profile() {
  // const [datas, setDatas] = useState(null)
  // const [isLoading, setLoading] = useState(false)
  const { datas, error } = useSWR('/api/test', fetcher);

  // useEffect(() => {
  //   setLoading(true)
  //   fetch('/api/test')
  //     .then((res) => res.json())
  //     .then((datas) => {
  //       setDatas(datas)
  //       setLoading(false)
  //     })
  // }, [])

  // if (isLoading) return <p>Loading...</p>
  // if (!datas) return <p>No profile data</p>
  console.log(datas);
  if (error) return <p>Failed to load</p>;
  if (!datas) return <p>Loading...</p>;

  return (
    <div>
      <ul>
        {datas.map((data) => (
          <li key={data.id}>{ data.first_name } { data.last_name } </li>
        ))}
      </ul>
    </div>
  )
}