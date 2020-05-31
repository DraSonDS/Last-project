import React, { Component } from 'react';
import { View, StyleSheet, Button, Alert, Text } from 'react-native';

export default class JButton extends React.Component {
    
    constructor(){
        super()

        this.state={
            NumberHolder: 1,
            NumberHolder2:1
        }
        
        
    }
        

    GenerateRandomNumber=()=>
    {
        var RandomNumber = Math.floor(Math.random()* 15) + 1 ;
        this.setState({
            NumberHolder: RandomNumber,
             NumberHolder2: RandomNumber
        })
        
    }
    render() {

        const j1=<Text>- По экономическому определению бедности: если половина или больше реальных доходов уходит на еду, то вы - бедный.
        - И что делать, как выбираться из бедности?
        - Жрать меньше, очевидно же.</Text>;
        const j2=<Text>(Моя любимая) Солдат перевернул кружку вверх дном и обращается к прапорщику: 
        - Из этой кружки пить нельзя - у нее верх запаян! Прапорщик долго вертел кружку, 
        потом говорит: 
        - Да у нее и дна нет!</Text>;
        const j3=<Text>Если приговорённый к смерти чихнул, тактичный палач должен промолчать</Text>;
        const j4=<Text>Собакам нельзя доверять, ведь они издают lie.</Text>;
        const j5=<Text>- Стой! Что ты пьешь! Это же метанол, ты что, не видишь?!
        - Нет.</Text>;
        const j6=<Text>Командир демонстрирует солдатам новый танк.
        - Вот, товарищи бойцы, это новый секретный танк. Петров.
        - Я!
        - Подними танк.
        Петров тужится, пыжится, не поднять.
        - Не поднять.
        - Сидоров, помоги Петрову.
        Пытаются вдвоем, та же ситуация.
        - Не поднять.
        - Иванов, помогай.
        Пыхтят втроем. Поднять не могут.
        - Никак не поднять, товарищ командир!
        - А что вы хотели? Сорок шесть тонн!ы</Text>;
        const j7=<Text>Туркменской семье настолько понравились кэшбэки, что они начали готовить их дома.</Text>;
        const j8=<Text>Белка летяга всю жизнь мечтала летать. Так и не полетела, хоть и планировала.</Text>;
        const j9=<Text>—бабушка купи мне reebok
        —нафига, у тебя же аквариума нет</Text>;
        const j10=<Text>Ползут две черепахи по пустыне. Одна спрашивает:
        – Чё, гололёд что ли?
        – Да не, вроде не похоже.
        – А нафига тогда столько песка насыпали?</Text>;
        const j11=<Text>Идет лекция по математике, в аудитории лектор и 3 студента.
        Внезапно встают 5 человек и уходят.
        Лектор:
        - Вот сейчас придут еще двое, и вообще никого не останется.</Text>;
        const j12=<Text>666</Text>;
        const j13=<Text>Слепой заходит в магазин, берет собаку-поводыря и начинает раскручивать её над головой.
        — Мужчина, что вы делаете?!!
        — Да так, осматриваюсь...</Text>;
        const j14=<Text>В капиталистическом мире человек эксплуатирует человека, а в социалистическом — наоборот</Text>;
        const j15=<Text>Игорь попал в глубокую яму и чудом из нее вылез.
        "Чудес не бывает", — подумал Игорь и залез обратно.</Text>;

        let message;
        if(this.state.NumberHolder2 == 1){
            message = j1
        } else if (this.state.NumberHolder2 == 2 ) {
            message = j2
        } else if (this.state.NumberHolder2 == 3 ) {
            message = j3
        } else if (this.state.NumberHolder2 == 4 ) {
            message = j4
        } else if (this.state.NumberHolder2 == 5 ) {
            message = j5
        } else if (this.state.NumberHolder2 == 6 ) {
            message = j6
        } else if (this.state.NumberHolder2 == 7 ) {
            message = j7
        } else if (this.state.NumberHolder2 == 8 ) {
            message = j8
        } else if (this.state.NumberHolder2 == 9 ) {
            message = j9
        } else if (this.state.NumberHolder2 == 10 ) {
            message = j10
        } else if (this.state.NumberHolder2 == 11) {
            message = j11
        } else if (this.state.NumberHolder2 == 12) {
            message = j12
        } else if (this.state.NumberHolder2 == 13 ) {
            message = j13
        } else if (this.state.NumberHolder2 == 14) {
            message = j14
        } else if (this.state.NumberHolder2 == 15) {
            message = j15

        } else{
            message = j6
        }

        return (
            <View style={styles.block}>
                <Button color='red' title="Генерировать шутку" onPress={this.GenerateRandomNumber} />
                <View style={styles.Text}>
                    {message}
                </View>
            </View>
                 );
            }   
            
        }

const styles = StyleSheet.create({
    block:{
    
    },
    Text:{
       color:'white',
       fontSize: 33,
       fontWeight: 'bold'
    },
    button:{
    }

})