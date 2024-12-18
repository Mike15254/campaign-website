"use client"
import React from "react";
import Image from 'next/image';
import { useTranslation } from '@/hooks/useTranslation';
import Priorities from '@/components/organisms/Priorities';

const prioritiesPage = () => {
  return (
  <>
    <Priorities/>
  </>
  )
}

export default prioritiesPage;
