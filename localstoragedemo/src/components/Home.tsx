import {
    Button,
    Text,
    View,
} from 'react-native';
import { RootState, persistor } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../redux/Slices/counterSlice';

export default function Home() {
    const data = useSelector((state: RootState) => state.counterReducer)
    const dispatch = useDispatch()
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 50 }}>{data.value}</Text>
            <Text style={{ fontSize: 50 }}>{data.text}</Text>
            <Button title='click' onPress={() => dispatch(increment())} />
            <Button title='clear' onPress={() => persistor.purge()} />
        </View>
    )
}