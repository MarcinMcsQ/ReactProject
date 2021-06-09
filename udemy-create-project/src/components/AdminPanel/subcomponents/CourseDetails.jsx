import React, { useContext, useState } from "react";
import request from "../../../helpers/request";
import { StoreContext } from "../../../store/StoreProvider";
import CoursePopup from "./CoursePopup";

const CourseDetails = (props) => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const { id, title } = props;
  const { setCourses } = useContext(StoreContext);
  const showPopup = () => setIsOpenPopup(true);
  const hidePopup = (event) => {
    if (event) {
      event.preventDefault();
    }

    setIsOpenPopup(false);
  };

  const handleDeleteCourse = async () => {
    try {
      const { status } = await request.delete(`/courses/${id}`);
      if (status === 200) {
        setCourses((prev) => prev.filter((course) => course.id !== id));
      }
    } catch (error) {
      console.warn(console.error());
    }
  };
  return (
    <details>
      <summary>{title}</summary>
      <button onClick={showPopup}>Edytuj</button>
      <button onClick={handleDeleteCourse}>Usuń</button>
      <CoursePopup {...props} isOpenPopup={isOpenPopup} hidePopup={hidePopup} />
    </details>
  );
};

export default CourseDetails;
