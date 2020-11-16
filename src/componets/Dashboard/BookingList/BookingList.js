import React from 'react';
import DbNavbar from '../DbNavbar/DbNavbar';
import DbSidebar from '../DbSidebar/DbSidebar';

const BookingList = () => {
    // state
    // useEffect

    return (
        <main>
            <section>
                <DbNavbar />
            </section>
            <section className="row">
                <div className="col-md-2">
                    <DbSidebar />
                </div>
                <div className="col-md-10">
                    <div className="">

                        <table className="table">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email ID</th>
                                    <th scope="col">Phone No</th>
                                    <th scope="col">Massage</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* {
                                    .map(info =>  <tr key={}>*/}
                                <tr >
                                    <td > Abu Horain</td>
                                    <td> abu.horain20@gmail.com</td>
                                    <td> 0174111111</td>
                                    <td> jfjaljfajfjfjjjj</td>
                                    <td >
                                        {/* input selector */}
                                        <button> Done </button>
                                    </td>
                                </tr>
                                {/* ) */}
                                {/* } */}
                            </tbody>
                        </table>
                    </div>

                </div>
            </section>
        </main>
    );
};

export default BookingList;