"use client";
import React, { createContext, useState, useEffect, useContext } from "react";
import { courses } from "@/data/courses";

const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch delay
    setTimeout(() => {
      setCourses(courses);
      setLoading(false);
    }, 800);
  }, []);

  const getCourseById = (id) => courses.find((c) => c.id === Number(id));

  return (
    <CourseContext.Provider value={{ courses, loading, getCourseById }}>
      {children}
    </CourseContext.Provider>
  );
};

export const useCourses = () => useContext(CourseContext);
