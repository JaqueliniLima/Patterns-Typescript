import Channel from "./Channel";
import Participant from "./Participant";

test("Deve trocar mensagem entre os participantes", function () {
    const participantA = new Participant("A");
    const participantB = new Participant("B");
    const participantC = new Participant("C");
    participantA.send(participantB, "Hello");
    participantA.send(participantC, "Hello");
    participantB.send(participantA, "Hello, How are you?");
    participantC.send(participantA, "Hello, How are you?");
});

test("Deve trocar mensagem por meio do canal", function () {
    const participantA = new Participant("A");
    const participantB = new Participant("B");
    const participantC = new Participant("C");
    const channel = new Channel();
    channel.register(participantA);
    channel.register(participantB);
    channel.register(participantC);
    channel.sendAll(participantA, "Hello");
})