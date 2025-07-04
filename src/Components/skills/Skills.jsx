import React from 'react'
import { skills } from '../../Data'
import './skill.css'

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title text-cs">professional skills</h2>
            <p className="section__subtitle">
                my <span>talent</span>
            </p>

            <div className="skills__container container grid">
                {skills.map(({name, percentage, description}, index)    => {
                return (
                    <div className="skills__item" key={index}>
                        <div className="skills__titles">
                            <h3 className="skills__name">{name}</h3>
                        </div>

                        <p className="skills__description">{description}</p>

                        <div className="skills__bar">
                            <div className="skills__percentage" style={
                                {width: `${percentage}%`}
                            }>
                                <span></span>
                            </div>
                        </div>
                    </div>
                )
            })}
            </div>
        </section>
    )
}

export default Skills