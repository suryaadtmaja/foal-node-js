// 3p
import { createConnection } from "typeorm";

// App
import { Room } from "../app/entities";

export const schema = {
  additionalProperties: false,
  properties: {
    name: { type: "string" },
    typeRoom: { type: "string" },
    roomNumber: { type: "number" },
  },
  required: ["name", "typeRoom", "roomNumber"],
  type: "object",
};

export async function main(args: {
  name: string;
  typeRoom: string;
  roomNumber: number;
}) {
  const connection = await createConnection();

  try {
    const room = new Room();

    room.name = args.name;
    room.typeRoom = args.typeRoom;
    room.roomNumber = args.roomNumber;

    console.log(await room.save());
  } catch (error) {
    console.log(error.message);
  } finally {
    await connection.close();
  }
}
