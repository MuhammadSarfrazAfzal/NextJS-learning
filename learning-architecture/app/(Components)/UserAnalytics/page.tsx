"use client";
import Link from "next/link";
const page = () => {
  console.log("is this client side?")
  return (
    <div>
      <h1>Analytics</h1>
      <ul>
        <li>
          <Link href="/UserAnalytics/1">User 1</Link>
        </li>
        <li>
          <Link href="/UserAnalytics/2">User 2</Link>
        </li>
        <li>
          <Link href="/UserAnalytics/3">User 3</Link>
        </li>
      </ul>
    </div>
  )
}

export default page
