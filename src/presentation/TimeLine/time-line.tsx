import React from 'react'
import TimelineItem from './components/TimelineItem'

const TimeLine = () => {
  return (
    <>
      <TimelineItem
        numberOne="1"
        numberTwo="2"
        titleR="1939"
        descriptionR="Fundación de Bardahl Manufactured Corporation USA y posicionamiento de la marca como compañía líder en la producción y comercialización de Fluidos Automotrices."
        titleL="1956"
        descriptionL="Apertura de Bardahl Argentina S.A."
      />
      <TimelineItem
        numberOne="3"
        numberTwo="4"
        titleR="1966"
        descriptionR="Ampliación de la fábrica y mudanza de las oficinas al barrio de Coghlan."
        titleL="1967"
        descriptionL="Auspicio del Equipo Campeón de competición Torino en Turismo Carretera."
      />
      <TimelineItem
        numberOne="5"
        numberTwo="6"
        titleR="1967"
        descriptionR="Lanzamiento de BARDAHL MÁXIMA COMPRESIÓN, un producto hito para la marca."
        titleL="1968"
        descriptionL="Creación “Bardaaaaaahhhhl Bardahhhhl” ganador del reconocimiento Martín Fierro al mejor Jingle publicitario en Radio."
      />
      <TimelineItem
        numberOne="7"
        numberTwo="8"
        titleR="1969"
        descriptionR="Participación de LA MISIÓN Argentina con los Torinos en Nürburgring Alemania, un evento histórico para el Automovilismo Argentino."
        titleL="1974"
        descriptionL="Inauguración de la Primera Planta en la localidad de Del Viso, Provincia de Buenos Aires."
      />
      <TimelineItem
        numberOne="7"
        numberTwo="8"
        titleR="1985"
        descriptionR="Lanzamiento de TIR, producto de nuestra marca reconocido a nivel nacional."
        titleL="1986"
        descriptionL="Inauguración de la fábrica de grasas."
      />
      <TimelineItem
        numberOne="7"
        numberTwo="8"
        titleR="1994"
        descriptionR="Incorporación de la fabricación de botellas a nuestra producción."
        titleL="1998"
        descriptionL="Lanzamiento de la campaña Gianni Manfredi, ganador del Clio en Nueva York a la mejor campaña publicitaria en TV."
      />
      <TimelineItem
        numberOne="7"
        numberTwo="8"
        titleR="1998"
        descriptionR="Incorporación de la marca Bestolife, empresa líder en el desarrollo de grasas especiales para el mercado del Oil/Gas."
        titleL="2003"
        descriptionL="Lanzamiento de campaña Líquido para frenos en TV, ganadora del Lápiz de Oro."
      />
      <TimelineItem
        numberOne="7"
        numberTwo="8"
        titleR="2003"
        descriptionR="Auspicio del auto de Ernesto Tito Bessone, campeón en el TC."
        titleL="2014"
        descriptionL="Auspicio del auto de Ernesto Tito Bessone, campeón en el TC."
      />
      <TimelineItem
        numberOne="7"
        numberTwo="8"
        titleR="2019"
        descriptionR="Nueva línea de llenado y producción de botellas."
        titleL=""
        descriptionL=""
        disabel={true}
      />
    </>
  )
}

export default TimeLine
