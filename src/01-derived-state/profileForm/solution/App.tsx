import { useEffect, useState, type SubmitEvent } from "react";
import "../App.css";
import Header from "../../../components/Header/Header";

type ProfileData = {
    name: string;
    surname: string;
    username: string;
    height: number; // in cm
    weight: number; // in kg
    bmi: number; // Body Mass Index
    age: number;
    isAdult: boolean | null;
}

export default function App() {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [age, setAge] = useState("");
    const [submittedData, setSubmittedProfile] = useState<ProfileData | null>(null);

    // derived state
    const username = name && surname ? `${name.charAt(0)}${surname}`.toLowerCase() : ""
    const bmi = weight && height ? Number(weight) / (Number(height) / 100) ** 2 : null;
    const isAdult = age ? parseInt(age) >= 18 : null;

    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        setSubmittedProfile({
            name,
            surname,
            username,
            height: height ? parseInt(height) : 0,
            weight: weight ? parseInt(weight) : 0,
            bmi: bmi ? parseFloat(bmi.toFixed(2)) : 0,
            age: age ? parseInt(age) : 0,
            isAdult,
        });
    };

    return (
        <>
            <Header
                sectionName="Derived State"
                title="Profile form — solution"
                tooltip="The application is working as expected with improved code quality, optimized state management, and simplified UI."
            />
            <div className="profile-container">
                <h2>Profile Form</h2>
                <div className="form-wrapper">
                    <form onSubmit={handleSubmit} className="profile-form">
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="surname">Surname:</label>
                            <input
                                type="text"
                                id="surname"
                                value={surname}
                                onChange={(e) => setSurname(e.target.value)}
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="height">Height (cm):</label>
                            <input
                                type="text"
                                id="height"
                                value={height}
                                onChange={(e) => setHeight(e.target.value)}
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="weight">Weight (kg):</label>
                            <input
                                type="text"
                                id="weight"
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="age">Age:</label>
                            <input
                                type="text"
                                id="age"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                className="form-input"
                            />
                        </div>

                        <button type="submit" className="submit-button">
                            Submit
                        </button>
                    </form>

                    <div className="info-card">
                        <h3>API Submission</h3>
                        <p>
                            Upon form submission, the following <code>ProfileData</code> object must be sent to the API:
                        </p>
                        <pre>
                            {`{
    name: string;
    surname: string;
    username: string;
    height: number; // in cm
    weight: number; // in kg
    bmi: number; // Body Mass Index
    age: number;
    isAdult: boolean;
}`}
                        </pre>
                        <h4>Notes:</h4>
                        <ul>
                            <li>The <code>username</code> must be the first letter of the name followed by the surname, all in lowercase.</li>
                            <li>The <code>BMI (Body Mass Index)</code> is calculated from weight and height (formula <code>weightKg / heightM ** 2;</code>).</li>
                            <li>The <code>isAdult</code> must be true if the user is equal to or over 18.</li>
                        </ul>
                    </div>
                </div>

                {submittedData && (
                    <>
                        <hr />
                        <div className="profile-display">
                            <h3>Profile Information</h3>
                            <div className="profile-info">
                                <p>
                                    <strong>Name:</strong> {submittedData.name}
                                </p>
                                <p>
                                    <strong>Surname:</strong> {submittedData.surname}
                                </p>
                                <p>
                                    <strong>Username:</strong> {submittedData.username}
                                </p>
                                <p>
                                    <strong>Height:</strong> {submittedData.height} cm
                                </p>
                                <p>
                                    <strong>Weight:</strong> {submittedData.weight} kg
                                </p>
                                <p>
                                    <strong>BMI:</strong> {submittedData.bmi}
                                </p>
                                <p>
                                    <strong>Date of Birth:</strong> {submittedData.age}
                                </p>

                                <p>
                                    <strong>Is Adult:</strong> {submittedData.isAdult ? 'true' : 'false'}
                                </p>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}
