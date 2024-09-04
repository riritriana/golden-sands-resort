export default function Booking() {
  // param = id hotel
  // CONST HOTEL = fetch(by id hotel)
  // param = id user

  // function submit()
  // const data = {
  //     idHotel: idHotel,
  //     idUser: idUser,
  //     checkin: "12-12-2012",
  //     checkout: "02-01-2013",
  // }
  // fetch(data, POST)
  return (
    <div>
      <form>
        <div>
          {/* tampilin data hotel,  HOTEL */}
          <img src="" alt="" />
          {/* jUDUL HOTEL */}
          <h3></h3>
        </div>
        {/* 
            checkin : pilih tanggal => onChange
            checkout : pilih tanggal
            button checkout => submit()
            button cancel
        */}
        <label>Check In</label>
        <input type="date" name="" id="" />
        <label></label>
      </form>
    </div>
  );
}
