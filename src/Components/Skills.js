import React from 'react';
import "./Skills.css";

const frontendSkills = [
    {
        title: "Html",

        percentage: '85%',
    },
    {
        title: "CSS",

        percentage: '95%',
    },
    {
        title: "Javascript",

        percentage: '70%',
    },
    {
        title: "React.js",

        percentage: "75%"
    }
]

const backendSkills = [
    {
        title: "Python",

        percentage: '85%',
    },
    {
        title: "Django",

        percentage: '95%',
    },
    {
        title: "C++",

        percentage: '70%',
    },
    {
        title: "MySQL",

        percentage: "75%",
    }
]

const Skills = () => {
    return <div className='skills_wrapper d-flex gap-5'>
        <div className="frontend-skill w-50">
            {
                frontendSkills.map((item, index) => (
                    <SkillItem key={index} title={item.title} percentage={item.percentage} />
                ))
            }
        </div>
        <div className="backend-skill w-50">
            {
                backendSkills.map((item, index) => (
                    <SkillItem key={index} title={item.title} percentage={item.percentage} />
                ))
            }
        </div>
    </div>
}

const SkillItem = ({ title, percentage }) => {
    return <div className='skill-data mb-3'>
        <div className="skill-title d-flex align-items-center justify-content-between">
            <h6>{title}</h6>
            <span>{percentage}</span>
        </div>

        <div className="skill-bar">
            <span className='skill-bar-percentage' style={{ width: `${percentage}` }}></span>
        </div>
    </div>

}

export default Skills