'use client';
import { useEffect } from "react";

export default function HomePage() {
  useEffect(()=>{
    window.alert('Welcome');
  },[])

  return (
    <>
      <h1>Home</h1>
      <p>This page is for Home</p>
    </>
  );
}
