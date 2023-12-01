import { Prisma, ElectronicDevice } from "@prisma/client";

export interface ElectronicDevicesRepository {
    create(data: Prisma.ElectronicDeviceUncheckedCreateInput): Promise<ElectronicDevice>;
}