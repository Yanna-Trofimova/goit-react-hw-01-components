import PropTypes from 'prop-types';
import css from './Statistics.module.css';


export const Statistics = ({  title, stats }) => {
    return <section className={css.statistics}>
        
        {title && <h2 className={css.title}>{title}</h2>}
    
    
        <ul className={css.statlist}>
            {stats.map(({ id, percentage,label }) => 
            <li className={css.item} key={id}>
                     <span className={css.label}>{label }</span> <br />
                    <span className={css.percentage} >{percentage }%</span>
            </li>
                 )}
            </ul>
       
      
        </section>;
};

Statistics.propTypes = {
    // title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
        id: PropTypes.string.isRequired,
       label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
  }) ,   
   )
}