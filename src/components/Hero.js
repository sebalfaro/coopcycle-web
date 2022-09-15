
export default function Hero() {
  return (
    <>
      <section className="heroBox">
        <h1>Hero</h1>
      </section>
      <style jsx>
        {`
        .heroBox{
          width: 100%;
          height: 65vh;
          background-color: red;
        }
      `}
      </style>
    </>
  )
}