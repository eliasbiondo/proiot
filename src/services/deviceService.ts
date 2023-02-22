import Device, { IDevice } from "../database/schemas/deviceSchema";

class DeviceService {

	async create(device: IDevice): Promise<IDevice> {

		try {

			return await Device.create(device);
		
		} catch (error) {

			throw new Error(`Failed to create device. Error: ${error}`);
		
		}
	
	}

	async getAll(): Promise<IDevice[]> {

		try {

			return await Device.find();
		
		} catch (error) {

			throw new Error(`Failed to get devices. Error: ${error}`);
		
		}
	
	}
  
	async getById(id: string): Promise<IDevice | null> {

		try {

			return await Device.findById(id);
		
		} catch (error) {

			throw new Error(`Failed to get device. Error: ${error}`);
		
		}
	
	}
  
	async update(id: string, device: IDevice): Promise<IDevice | null> {

		try {

			return await Device.findByIdAndUpdate(id, device, { new: true });
		
		} catch (error) {

			throw new Error(`Failed to update device. Error: ${error}`);
		
		}
	
	}
  
	async delete(id: string): Promise<boolean> {

		try {

			await Device.findByIdAndDelete(id);
			return true;
		
		} catch (error) {

			throw new Error(`Failed to delete device. Error: ${error}`);
		
		}
	
	}

}
  
export default new DeviceService();