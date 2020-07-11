import  React from 'react'
import ImageCompany from '../statics/images/company.jpg'
const About = ({ datos }) => {
  //{const datoss = datos.company}
    return (
    <div className="container mx-auto">
        <div className="grid grid-cols-1">
        <header>
          <img src={ImageCompany} alt=""/>
        </header>
        <div className="bg-white p-2">
          <h2 className="text-4xl text-current font-semibold">Acerca de {datos.company.name}</h2>
          <p>{datos.company.summary}</p>
          <div className="mt-1 bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3">
          <p className=" text-blue-500 hover:text-blue-800">Sitio web: <a href={datos.company.links.website}>{datos.company.links.website}</a></p>
          <p className="text-sm">sitios de lanzamiento: {datos.company.launch_sites}</p>

          </div>
        </div>
      </div>
      </div>
    )
  }

export default About;
