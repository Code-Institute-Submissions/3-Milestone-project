/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/camelcase */
import React, { useState, FormEvent, useEffect } from 'react';
// adittional css styles
import { Container } from '../styles/PatientList';

interface Patients {
  _id: string;
  name_and_surname: string;
  eircode: string;
  phone_number: string;
  date_of_birth: string;
}

const CreatePatient: React.FC = () => {
  const [newName, setName] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [date, setDate] = useState('');

  const [editing, setEditing] = useState(false);
  const [newId, setId] = useState('');

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

    setName('');
    setAddress('');
    setNumber('');
    setDate('');
  }

  const deletePatients = async (id: string): Promise<void> => {
    /**
     *  Func delete patients from the database
     *  and ask if you really want it.
     */
    const patientResponse = window.confirm(
      `Are you sure to delete ${newName} patient?`,
    );
    if (patientResponse) {
      const response = await fetch(`http://localhost:5000/patients/${id}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      console.log(data);
      getPatients();
    }
  };

  useEffect(() => {
    getPatients();
  }, []);

  const editPatients = async (id: string): Promise<void> => {
    /**
     *  This func allows to when clicking in edit it will show the data
     *  referent the use you've seleted in order to update.
     */
    const response = await fetch(`http://localhost:5000/patient/${id}`);
    const data = await response.json();
    console.log(data);

    setEditing(true);
    /* eslint-disable no-underscore-dangle */
    setId(data._id);

    setName(data.name_and_surname);
    setAddress(data.eircode);
    setNumber(data.phone_number);
    setDate(data.date_of_birth);
  };

  async function handleSubmit(
    /**
     *  Func responsible for get the api and add patient submited
     *  in the input.
     *
     *  When clicking in edit this func send the request method "PUT"
     *  in oder to edit the data.
     */
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    if (!editing) {
      const response = await fetch('http://localhost:5000/patients', {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
          /* eslint-disable no-underscore-dangle */
          name_and_surname: newName,
          eircode: address,
          phone_number: number,
          date_of_birth: date,
        }),
      });
      const data = await response.json();
      console.log(data);
    } else {
      /**
       *  Statment if is "editing" it's not gonna post.
       */
      const response = await fetch(`https://localhost:5000/patients/${newId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name_and_surname: newName,
          eircode: address,
          phone_number: number,
          date_of_birth: date,
        }),
      });
      const alert = window.alert(`Patient ${newName} has been updated!`);
      const data = await response.json();
      console.log(data);
      setEditing(false);
      setId('');

      return alert;
    }
    await getPatients();

    setName('');
    setAddress('');
    setNumber('');
    setDate('');
  }

  return (
    <>
      {/* Creation Form */}
      <Container>
        <h1>{editing ? 'Update Patient' : 'Create Patient'}</h1>
        <div className="col-md-12">
          <div className="row">
            <form onSubmit={handleSubmit} className="card card-body">
              <div className="form-group">
                <h2>Name and Surname</h2>
                <input
                  type="text"
                  onChange={e => setName(e.target.value)}
                  value={newName}
                  className="form-control"
                  placeholder="Name and surname"
                  required
                />
              </div>

              <div className="form-group">
                <h2>Address</h2>
                <input
                  type="text"
                  onChange={e => setAddress(e.target.value)}
                  value={address}
                  className="form-control md-form md-outline input-with-post-icon datepicker"
                  placeholder="Eirode"
                  required
                />
              </div>
              <div className="form-group">
                <h2>Phone Number</h2>
                <input
                  type="number"
                  onChange={e => setNumber(e.target.value)}
                  value={number}
                  className="form-control"
                  placeholder="+353xxxxxxxxx"
                  required
                />
              </div>
              <div className="form-group">
                <h2>Date of Birth</h2>
                <input
                  type="date"
                  onChange={e => setDate(e.target.value)}
                  value={date}
                  className="form-control  col-3"
                  placeholder="Date-of-birth"
                  required
                />
              </div>
              <button
                className="btn btn-success btn-block"
                type="submit"
                style={{
                  height: '35px',
                  marginBottom: '10px',
                  fontSize: '13px',
                }}
              >
                {editing ? 'Update' : 'Create'}
              </button>
            </form>
          </div>

          {/* Patient List */}
          <div className="col-md-12">
            <table
              className="table"
              style={{ marginTop: '30px', color: 'white' }}
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th className="">Address</th>
                  <th className="">Phone</th>
                  <th className="">Birthday</th>
                  <th>Operations</th>
                </tr>
              </thead>
              <tbody>
                {patients.map(patient => (
                  <tr key={patient._id}>
                    <td>{patient.name_and_surname}</td>
                    <td className="small-hide">{patient.eircode}</td>
                    <td className="small-hide">{patient.phone_number}</td>
                    <td>{patient.date_of_birth}</td>
                    <td>
                      <button
                        className="btn btn-success btn-sm btn-block"
                        type="submit"
                        onClick={e => editPatients(patient._id)}
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
        </div>
      </Container>
    </>
  );
};

export default CreatePatient;
