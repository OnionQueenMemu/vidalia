import React, { useState, useEffect, useContext } from 'react';
import Nav from './Nav';
import { authContext } from '../../Context'

const Characters = () => {

    const [charList, setCharList] = useState([])
    const { id } = useContext(authContext);

    useEffect(() => {
        getChars()
    }, [])

    const getChars = async() => {
        const res = await fetch(`/api/character/${id}`)
        const data = await res.json();
        console.log(data)
        setCharList(data)
    }

    const charElements = charList.map((char) => {
        return (
            <div className='char-container'>
                <div className='char-header'>
                    <div className='char-name'>{char.name}</div>
                    <div className='char-class-name'>{`Class: ${char.Class.name}`}</div>
                    <div className='char-weakness'>{`Weakness: ${char.Class.weakness}`}</div>
                    <div className='char-background'>{`Background: ${char.story}`}</div>
                </div>
                <div className='char-stats'>
                    <div className='char-stats-header'>Stats</div>
                    <div className='char-stat-list'>
                        <div className='char-stat-one'>{`Armor Class: ${char.armorClass}`}</div>
                        <div className='char-stat-two'>{`Charisma: ${char.charisma}`}</div>
                        <div className='char-stat-one'>{`Constitution: ${char.constitution}`}</div>
                        <div className='char-stat-two'>{`Dexterity: ${char.dexterity}`}</div>
                        <div className='char-stat-one'>{`Hit Points: ${char.hitPoints}`}</div>
                        <div className='char-stat-two'>{`Intelligence: ${char.intelligence}`}</div>
                        <div className='char-stat-one'>{`Strength: ${char.strength}`}</div>
                        <div className='char-stat-two'>{`Wisdom: ${char.wisdom}`}</div>
                    </div>
                </div>
                <div className='char-ability'>
                    <div className='char-ability-header'>Ability</div>
                    <div>{`Ability: ${char.Ability.name}`}</div>
                    <div>{`Uses: ${char.Ability.uses}`}</div>
                    <div>{`Description: ${char.Ability.description}`}</div>
                </div>
                <div className='starting-equipment'>
                    <div className='start-equip-header'>Starting Equipment</div>
                    <div className='item-section'>
                        <div>{`Item: ${char.Class.Starter.Item.name}`}</div>
                        <div>{`Item: ${char.Class.Starter.Item.description}`}</div>
                    </div>
                    <div className='weapon-section'>
                        <div>{`Weapon: ${char.Class.Starter.Weapon.name}`}</div>
                        <div>{`Damage Type: ${char.Class.Starter.Weapon.damageType}`}</div>
                        <div>{`Dice Roll: ${char.Class.Starter.Weapon.hitDice}`}</div>
                        <div>{`Description: ${char.Class.Starter.Weapon.description}`}</div>
                    </div>
                </div>
            </div>
        )
    })

    return(
        <>
            <Nav />
            {charElements}
        </>
    )
}

export default Characters;