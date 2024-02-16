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
    const handleRedirect = () => {
        if (pageUrl) {
            window.open(pageUrl, '_BLANK');
        }else if (repoUrl) {
            window.open(repoUrl, '_BLANK');
        }
    };
    const handleIconClick = (e) => {
        e.stopPropagation(); 
    };
    return  <div onClick={ handleRedirect } className="project-small">
        <img src={ imageUrl } />
        <div className="sub-text">
            <h3>{ title }</h3>
            <div className="skills">
                { tags.map((tag, index) => (
                    <span key={index}>{ tag }</span>
                ))}
            </div>
            {description.split('\n').map((line, index) => (
                <p key={index}>{line}</p>
            ))}
            
        </div>
        <div className="icons">
            {repoUrl && (
                <a href={ repoUrl } target="_BLANK"><FontAwesomeIcon icon={ faGithub } onClick={ handleIconClick } /></a>
            )}
            {/* {pageUrl && (
                <a href={ pageUrl } target="_BLANK"><FontAwesomeIcon icon={ faUpRightFromSquare } /></a>
            )} */}
        </div>
    </div>        
}