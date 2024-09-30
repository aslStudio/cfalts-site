import { toast } from 'react-toastify';

export const useUnavailbleToken = () => {
    function trigger() {
		toast(
			'This function is in progress now and will be finished very soon. Stay tuned!',
			{
				type: 'info',
				theme: 'dark',
				position: 'top-center'
			}
		)
	}

    return {
        trigger
    }
}