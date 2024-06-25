export default function Home() {
  return (
    <>
      <div className="container-fluid">
        <div className="row text-center">
          <div className="col-md-12 bg-warning p-3">
            Navber
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-12 bg-info p-5">
            Header
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-4 bg-warning p-5">
            card1
          </div>
          <div className="col-md-4 bg-success p-5">
            card2
          </div>
          <div className="col-md-4 bg-primary p-5">
            card3
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-12 bg-info p-5">
            footer
          </div>
        </div>
      </div>
    </>
  )
}
