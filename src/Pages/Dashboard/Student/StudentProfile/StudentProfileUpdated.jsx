import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";

const StudentProfileUpdated = () => {
    const { user } = useContext(AuthContext);
    const [userDataFromAPI, setUserDataFromAPI] = useState(null);

    useEffect(() => {
        if (user && user.email) {
            fetch("https://cm-academy-test-server-production.up.railway.app/users/student")
                .then(response => response.json())
                .then(data => {
                    // Filter the data based on user's email
                    const filteredUserData = data.find(item => item.email === user.email);
                    setUserDataFromAPI(filteredUserData);
                })
                .catch(error => {
                    console.error("Error fetching user data:", error);
                });
        }
    }, [user]);

    const [isEditing, setIsEditing] = useState(false);
    const [editedFields, setEditedFields] = useState({
        fullName: '',
        phone: '',
    });

    const handleEditClick = () => {
        setIsEditing(true);
        setEditedFields({
            fullName: userDataFromAPI?.fullName || '',
            phone: userDataFromAPI?.phone || '',
        });
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
        setEditedFields({
            fullName: userDataFromAPI?.fullName || '',
            phone: userDataFromAPI?.phone || '',
        });
    };

    const handleSaveEdit = () => {

        console.log(userDataFromAPI._id);
        console.log(`https://cm-academy-test-server-production.up.railway.app/users/student/${userDataFromAPI._id}`);
        fetch(`https://cm-academy-test-server-production.up.railway.app/users/student/${userDataFromAPI._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fullName: editedFields.fullName,
            }),
        })
            .then(response => response.json())
            .then(updatedUserData => {
                // Update the user data with the updated name
                setUserDataFromAPI(updatedUserData);
                setIsEditing(false);
            })
            .catch(error => {
                console.error("Error updating user data:", error);
            });
        setIsEditing(false);
    };

    if (!userDataFromAPI) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className="flex justify-end mb-4">
                {isEditing ? (
                    <div className="flex items-center">
                        <button
                            className="text-gray-500 hover:text-gray-700 transition duration-300"
                            onClick={handleCancelEdit}
                        >
                            Cancel
                        </button>
                        <button
                            className="text-blue-500 hover:text-blue-700 ml-2 transition duration-300"
                            onClick={handleSaveEdit}
                        >
                            Save
                        </button>
                    </div>
                ) : (
                    <button
                        className="text-blue-500 hover:text-blue-700 transition duration-300"
                        onClick={handleEditClick}
                    >
                        Edit
                    </button>
                )}
            </div>
            <div className="mt-6">
                <p className="font-semibold mt-1">Student ID: <p>{userDataFromAPI._id}</p> </p>
            </div>

            <div className="mt-4">
                <p className="font-semibold">Full Name:</p>
                {isEditing ? (
                    <input
                        className="border rounded-md px-2 py-1 w-full mt-1"
                        type="text"
                        value={editedFields.fullName}
                        onChange={(e) =>
                            setEditedFields({ ...editedFields, fullName: e.target.value })
                        }
                    />
                ) : (
                    <p className=" ml-2 border font-semibold text-lg ">{userDataFromAPI.fullName}</p>
                )}
            </div>

            <div className="mt-4">
                <p className="font-semibold">Phone:</p>
                {isEditing ? (
                    <input
                        className="border rounded-md px-2 py-1 w-full mt-1"
                        type="text"
                        value={editedFields.phone}
                        onChange={(e) =>
                            setEditedFields({ ...editedFields, phone: e.target.value })
                        }
                    />
                ) : (
                    <p className=" ml-2 border">{userDataFromAPI.phone}</p>
                )}
            </div>

            <div className="mt-4">
                <p className="font-semibold">Email Address:</p>
                <div className={`border rounded-md px-2 py-1 w-full mt-1 ${isEditing ? 'bg-gray-100' : 'bg-white'}`}>
                    {isEditing ? (
                        <p className="ml-2 text-gray-400">{userDataFromAPI.email} <span className="text-red-300 items-end">Not Editable</span> </p>
                    ) : (
                        <p className="ml-2">{userDataFromAPI.email}</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default StudentProfileUpdated;
