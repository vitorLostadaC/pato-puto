import { is } from '@electron-toolkit/utils'
import Store from 'electron-store'
import type { Store as StoreConfig } from '~/src/shared/types/store'

const defaults: StoreConfig = {
	configs: {
		appearance: {
			selectedPet: 'duck'
		},
		general: {
			firstRun: true,
			cursingInterval: 60,
			safeMode: false,
			focusMode: null
		}
	},
	auth: null
}

export const store = new Store<StoreConfig>({
	name: is.dev ? 'dev.store' : 'store',
	defaults
	// I'm just keeping this commented as reference for future migrations
	// migrations: {
	// 	'1.0.1': (store: typeof Store) => {
	// 		store.set('configs.general.newKey', 'test')
	// 	}
	// }
})
