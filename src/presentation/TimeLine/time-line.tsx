import React from 'react'
import TimelineItem from './components/TimelineItem'

const timelineData = [
  {
    startTime: '1939',
    endTime: '1956',
    description:
      'Fundación de Bardahl Manufacturing Corporation USA y consolidación de la marca como líder en la producción y comercialización de Fluidos Automotrices. Apertura de Bardahl Argentina S.A.',
    title: 'Fundación de Bardahl'
  },
  {
    startTime: '1966',
    endTime: '1967',
    description:
      'Ampliación de la fábrica y reubicación de las oficinas al barrio de Coghlan. Apoyo al Equipo Campeón en la competición Torino en Turismo Carretera.',
    title: 'Ampliación de la Fábrica'
  },
  {
    startTime: '1967',
    endTime: '1968',
    description:
      'Lanzamiento de BARDAHL MÁXIMA COMPRESIÓN, un hito en la marca. Creación de "Bardaaaaaahhhhl Bardahhhhl", galardonado con el reconocimiento Martín Fierro al mejor Jingle publicitario en Radio.',
    title: 'Lanzamiento de BARDAHL MÁXIMA COMPRESIÓN'
  },
  {
    startTime: '1969',
    endTime: '1974',
    description:
      'Participación de LA MISIÓN Argentina con los Torinos en Nürburgring, Alemania, un momento histórico para el Automovilismo Argentino. Inauguración de la Primera Planta en Del Viso, Provincia de Buenos Aires.',
    title: 'Participación en Nürburgring y Apertura de la Primera Planta'
  },
  {
    startTime: '1985',
    endTime: '1986',
    description:
      'Lanzamiento de TIR, un producto de nuestra marca reconocido a nivel nacional. Apertura de la fábrica de grasas.',
    title: 'Lanzamiento de TIR y Apertura de la Fábrica de Grasas'
  },
  {
    startTime: '1994',
    endTime: '1998',
    description:
      'Incorporación de la fabricación de botellas a nuestra producción. Lanzamiento de la campaña Gianni Manfredi, ganadora del Clio en Nueva York a la mejor campaña publicitaria en TV.',
    title:
      'Incorporación de la Fabricación de Botellas y Lanzamiento de la Campaña Gianni Manfredi'
  },
  {
    startTime: '1998',
    endTime: '2003',
    description:
      'Incorporación de la marca Bestolife, líder en el desarrollo de grasas especiales para el mercado del Oil/Gas. Lanzamiento de la campaña "Líquido para frenos" en TV, galardonada con el Lápiz de Oro.',
    title:
      'Incorporación de la Marca Bestolife y Lanzamiento de la Campaña "Líquido para Frenos"'
  },
  {
    startTime: '2003',
    endTime: '2014',
    description:
      'Auspicio del auto de Ernesto Tito Bessone, campeón en el TC. Auspicio del auto de Ernesto Tito Bessone, campeón en el TC.',
    title: 'Auspicio del Auto de Ernesto Tito Bessone'
  },
  {
    startTime: '2019',
    endTime: '2021',
    description: 'Nueva línea de llenado y producción de botellas.',
    title: 'Nueva Línea de Llenado y Producción de Botellas'
  }
]

const TimeLine = () => {
  return (
    <ol className="relative border-l border-gray-200 dark:border-gray-700">
      {timelineData.map((item, index) => (
        <TimelineItem
          key={index}
          date={`${item.startTime} - ${item.endTime}`}
          title={item.title}
          description={item.description}
        />
      ))}
    </ol>
  )
}

export default TimeLine
