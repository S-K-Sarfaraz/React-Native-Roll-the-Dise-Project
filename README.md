# Roll the Dise Project

We can not import an image through import statement and save it in a variable in TypeScript which is why we use ( declare module ) funtion to give the permission for it to store images as variavle

declare into index.d.ts file:

```
declare module '*.png'
```

- This is to make datatype of image through typescript

  ```
  type DiseProps = PropsWithChildren <{
  imageUrl: ImageSourcePropType
  }>
  ```

- Dise uses that datatype and pass that prop into Image tag

  ```
  const Dise = ({imageUrl}:DiseProps):JSX.Element => {
     return(
        <View>
           <Image style={styles.diceImage} source={imageUrl}/>
        </View>
     )
  }
  ```

- useState uses the specific Datatype which does not accept any string

  ```
  const [diseOne, setDiseOne] = useState <ImageSourcePropType>(DiseOne)
  ```

- This is used to get a random value between 1 to 6 with the help of switch case
  ```
  const rollDiseOnTap =() => {
     let randomNumber = Math.floor(Math.random() *6 +1 )

     switch (randomNumber) {
        case 1:
        setDiseOne(DiseOne)
        break;
        case 2:
        setDiseOne(DiseTwo)
        break;
        case 3:
        setDiseOne(DiseThree)
        break;
        case 4:
        setDiseOne(DiseFour)
        break;
        case 5:
        setDiseOne(DiseFive)
        break;
        case 6:
        setDiseOne(DiseSix)
        break;
        default:
        setDiseOne(DiseOne)
        break;
     }
  }
  ```
