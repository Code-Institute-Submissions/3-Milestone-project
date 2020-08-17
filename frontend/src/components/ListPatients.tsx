import React, { useState, useEffect } from 'react';

interface Patients {
  _id: string;
  name_and_surname: string;
  address: string;
  phone_number: string;
  date_of_birth: string;
}

const ListPatient: React.FC = () => {
  const [patients, setPatients] = useState<Patients[]>(() => {
    const storagedPatients = localStorage.getItem('@clinicDatabase:patients');

    if (storagedPatients) {
      return JSON.parse(storagedPatients);
    }
    return [];
  });

  async function getPatients(): Promise<void> {
    /**
     *  Func get patients from the API in order to
     *  display it in the screen.
     */
    const response = await fetch('http://localhost:5000/patients');
    const data = await response.json();
    setPatients(data);
  }

  useEffect(() => {
    getPatients();
  }, []);

  const deletePatients = async (id: string): Promise<void> => {
    /**
     *  Func delete patients from the database
     *  and ask if you really want it.
     */
    const patientResponse = window.confirm('Are you want to delete patient?');
    if (patientResponse) {
      const response = await fetch(`http://localhost:5000/patients/${id}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      console.log(data);
      getPatients();
    }
  };

  return (
    <>
      <div className="col md-12">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name and Surname</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Date of Birth</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {patients.map(patient => (
              <tr key={patient._id}>
                <td>{patient.name_and_surname}</td>
                <td>{patient.address}</td>
                <td>{patient.phone_number}</td>
                <td>{patient.date_of_birth}</td>
                <td>
                  <button
                    className="btn btn-primary btn-sm btn-block"
                    type="submit"
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm btn-block"
                    type="submit"
                    onClick={e => deletePatients(patient._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ListPatient;
