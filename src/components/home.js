import React from "react";

const Home = ({ logout }) => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column vh-100">
      <div className="mb-5">
        <h3 className="d-flex w-100 text-align-start fw-normal flex-column">
          Welcome to <br />
          <div className="d-block primary-text-color fw-bold fs-1">Unstop</div>
        </h3>
      </div>
      <div className="d-flex justify-content-center align-items-center flex-column gap-1 bg-white border-r shadow-button px-5 py-4">
        <img
          src="images/Frame 1116607307.png"
          alt="user-img"
          width="120"
          height="120"
        />
        <h6 className="primary-text-color">Username</h6>
        <p className="mb-0">example@gmail.com</p>
        <p className="mb-1">Female</p>
        <button
          id="logoutButton"
          className="mt-4 w-100 secondary-bg-color d-flex align-items-center justify-content-center py-2 border-none border-r text-white fw-bold"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;
