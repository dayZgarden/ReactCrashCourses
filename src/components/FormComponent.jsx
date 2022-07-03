import React from "react";

const FormComponent = (props) => {

      return(
      <main>
        <form>
          <input
            name="firstName"
            placeholder="First Name"
            type="text"
            onChange={props.handleChange}
          />
          <br />
          <input
            name="lastName"
            placeholder="Last Name"
            type="text"
            onChange={props.handleChange}
          />
          <br />
          <input
            name="age"
            placeholder="Age"
            type="number"
            onChange={props.handleChange}
          />
          <br />
          <hr />
          <br />
          <input
            onChange={props.handleChange}
            type="radio"
            name="gender"
            value="male"
          />{" "}
          Male
          <br />
          <input
            onChange={props.handleChange}
            type="radio"
            name="gender"
            value="female"
          />{" "}
          Female
          <br />
          <select name="destination" onChange={props.handleChange}>
            <option value="Florida">Florida</option>
            <option value="California">California</option>
            <option value="Oregon">Oregon</option>
            <option value="Washington">Washington</option>
          </select>
          <br />
          <label>
            Dietary Restrictions:
            <br />
            <input
              name="isVegan"
              type="checkbox"
              onChange={props.handleChange}
              checked={props.data.isVegan}
            />
            Vegan
            <br />
            <input
              name="isKosher"
              type="checkbox"
              onChange={props.handleChange}
              checked={props.data.isKosher}
            />
            Kosher <br />
            <input
              name="isLactoseFree"
              type="checkbox"
              onChange={props.handleChange}
              checked={props.data.isLactoseFree}
            />
            Lactose Free <br />
          </label>
          <br />
          <button>Submit</button>
        </form>

        <h1>Entered information:</h1>
        <h3>
          Your name: {props.data.firstName} {props.data.lastName}
        </h3>
        <h3>Your age: {props.data.age}</h3>
        <h3>Your gender: {props.data.gender}</h3>
        <h3>Your destination: {props.data.destination}</h3>
        <h3>Your dietary restrictions:</h3>
        <h4> {props.data.isVegan ? "Vegan" : null}</h4>
        <h4> {props.data.isKosher ? "Kosher" : null}</h4>
        <h4> {props.data.isLactoseFree ? "Lactose free" : null}</h4>
      </main>
      )
};

export default FormComponent;
