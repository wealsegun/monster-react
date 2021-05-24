import React from 'react';
import './card-list.styles.css';
import { Card} from '../../components/card/card.component';

export const CardList = (props) => 
{ 
    // console.log(props);
    return(<div className='card-list'>
         {
           props.monsters.map(monster =>
            <Card key={monster.id} monster = {monster}></Card>
                //   <h1 key={monster.id} >{monster.name}</h1>
                  )
         }
    </div>)
};

