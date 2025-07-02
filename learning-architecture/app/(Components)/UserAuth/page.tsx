
const page = () => {
  return (
    <>
      <div className="bg-black h-10">
        <h1 className="pl-7 pt-2 text-1xl font-bold text-white">hello</h1>
      </div>

      <div className="flex justify-evenly">
        <div className="bg-amber-600 w-[300px] h-[100px]">
          <h3>box1</h3>
        </div>

        <div className="bg-green-600 w-[300px] h-[100px]">
          <h3>box2</h3>
        </div>

        <div className="bg-yellow-600 w-[300px] h-[100px]">
          <h3>box3</h3>
        </div>
      </div>
    </>

  )
}

export default page
