import './globals.css';

import Image from 'next/image'
import Header from '../components/Header'
import DatePicker from '../components/DatePicker'
import Summary from '../components/Summary'
import StudyCards from '../components/StudyCards'
import StudyLogger from '../components/StudyLogger'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <DatePicker />
      <Summary />
      <StudyCards />
      <StudyLogger />
      <Footer />
    </>
  )
}
