import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

const ColumnForm = props  => {
    const [icon, setIcon] = useState ('');
    const [title, setTitle] = useState ('');

    const handleSubmit = e => {
        e.preventDefault();
        props.action({title: title, icon:icon });
        setIcon('');
        setTitle('');
    }

    return ( 
        <form onSubmit={handleSubmit} className={styles.columnForm}>
            <div>
            Title: <TextInput value={title} onChange={e=>setTitle(e.target.value)}/>
            </div>
            <div>
            Icon: <TextInput value={icon} onChange={e=>setIcon(e.target.value)}/>
            </div>
            <div>
            <Button>Add column</Button>
            </div>
        </form>
    
     );
}
 
export default ColumnForm;