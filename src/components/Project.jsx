import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Projects(
    {
        title,
        description,
        tags,
        imageUrl,
        repoUrl,
        pageUrl
    }
){
    return <>
        <img src={ imageUrl } />
        <div className="sub-text">
            <h3>{ title }</h3>
            <div className="skills">
                { tags.map((tag, index) => (
                    <span key={index}>{ tag }</span>
                ))}
            </div>
            <p>{ description }</p>
            <div className="icons">
            {repoUrl && (
                <a href={ repoUrl } target="_BLANK"><FontAwesomeIcon icon={ faGithub } /></a>
            )}
            {pageUrl && (
                <a href={ pageUrl } target="_BLANK"><FontAwesomeIcon icon={ faUpRightFromSquare } /></a>
            )}
            </div>
        </div>
    
    </>          
}