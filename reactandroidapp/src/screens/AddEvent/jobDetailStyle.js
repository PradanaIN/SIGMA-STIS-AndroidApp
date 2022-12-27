import { Row } from "native-base";

const styles = {
    topTextView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    topText: {
        fontSize: 14
    },
    welcomeText: {
        fontWeight: 'bold',
        fontSize: 21,
    },
    done: {
        borderColor: "#fff",
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0
        },
        backgroundColor:"##4793d6"
    }
}

export default styles;