import classnames from 'classnames'

export const classes = (classNames: Array<string> | string, importName: any) =>
	classnames(
		(Array.isArray(classNames) ? classNames : classNames.split(' ')).map(
			(x) => importName[x]
		)
	)
