import React from 'react';
// aditional css styles imported here
import { Container } from '../styles/Help';

const Help: React.FC = () => {
  return (
    <>
      <Container>
        <div className="card card-body">
          <h1>User Instructions</h1>

          <div id="accordion" style={{ marginBottom: '40px' }}>
            <div className="card " style={{ backgroundColor: '#56cc9d' }}>
              <div className="card-header" id="headingOne">
                <h5 className="mb-0">
                  <button
                    type="button"
                    className="btn collapsed col-12"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    <p># Create Patient</p>
                  </button>
                </h5>
              </div>

              <div
                style={{ backgroundColor: '#fff' }}
                id="collapseOne"
                className="collapse"
                aria-labelledby="headingOne"
                data-parent="#accordion"
              >
                <div className="card-body">
                  At the navbar in the top of the page, clicking under the link
                  “Home” You find a “Create Patient” after filling the form
                  press the green button “Create” and the Patient will appear in
                  the list down below. * Important! There’s no max or min limit
                  or characters validation for a better flexibility But you need
                  to fill all the forms in order to create the patient.
                </div>
              </div>
            </div>
            <div className="card" style={{ backgroundColor: '#56cc9d' }}>
              <div className="card-header" id="headingTwo">
                <h5 className="mb-0">
                  <button
                    type="button"
                    className="btn collapsed col-12"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <p> # Update Patient</p>
                  </button>
                </h5>
              </div>
              <div
                style={{ backgroundColor: '#fff' }}
                id="collapseTwo"
                className="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordion"
              >
                <div className="card-body">
                  At the navbar in the top of the page, clicking under the link
                  “Home” you find a table Below the form “Create Patient” with
                  all Patients saved in the database with all they Informations,
                  at the extreme right in the table under “Operations” there’s a
                  green button “Edit” clicking on it the Patient’s data is gonna
                  be displayed in the form, the title’s form Will display
                  “Update Patient” and the form’s buttons “Update”. Afte make
                  your changes in the form click the button “Update” You will
                  receive an alert Saying “The Patient has been updated!” *
                  Important! If There’s none Patients saved in the database it
                  will appear blank.
                </div>
              </div>
            </div>
            <div className="card" style={{ backgroundColor: '#56cc9d' }}>
              <div className="card-header" id="headingThree">
                <h5 className="mb-0">
                  <button
                    type="button"
                    className="btn collapsed col-12"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <p> # Delete Patient</p>
                  </button>
                </h5>
              </div>
              <div
                style={{ backgroundColor: '#fff' }}
                id="collapseThree"
                className="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordion"
              >
                <div className="card-body">
                  At the navbar in the top of the page, clicking under the link
                  “Home” you find a table Below the form “Create Patient” with
                  all Patients saved in the database with all they Informations,
                  at the extreme right in the table under “Operations” there’s a
                  green button “Delete” clicking on it an alert message will
                  appear asking, “are you sure you want to delete the user?”
                  clicking “ok” The user is gonna be deleted. * Important! Once
                  deleted data can’t be recovered.
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Help;
