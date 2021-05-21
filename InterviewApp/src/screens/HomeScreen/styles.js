import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#788eec",
    marginLeft: 30,
    marginRight: 30,
    marginTop: 100,
    marginBottom: 30,
    height: 48,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    width: 100,
  },
  profileText: {
    marginBottom: 30,
    marginTop: 30,
    fontStyle: "italic",
    fontSize: 20,
  },
  textContainer: {
    flexDirection: "row",
  },
  tags: {
    backgroundColor: "#788eec",
    color: "white",
    borderRadius: 4,
    margin: 5,
    padding: 5,
  },
  specialContainer: {
    flex: 1,
    alignItems: "center",
    marginBottom: 4,
    backgroundColor: "white",
  },
  likesContainer: {
    alignItems: "center",
    justifyContent: "center",
    textAlignVertical: "center",
    flexDirection: "row",
  },
  likeText: {
    marginLeft: 5,
  },
  description: {
    textAlign: "left",
    width: "100%",
    paddingLeft: 10,
    paddingRight: 10,
  },
  user: {
    flexDirection: "row",
    width: "100%",
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 5,
  },
  userText: {
    marginLeft: 10,
    justifyContent: "center",
  },
});
