import React from 'react'
import moment from 'moment'
import MaterialIcon from 'material-icons-react'

export const EmailSenderHeader = (props) => {
    const data = props.post

    const time = moment.unix(data.created_utc).utc()
    const timeCreated = time.format('MMM, D YYYY, h:m a')
    const timeAgo = time.fromNow()
    const subredditString = `<${data.subreddit_name_prefixed}>`

    return (
        <div className="SingleViewContent__Row">
            <div className="SingleViewContent__icon">
                <MaterialIcon
                    icon="account_circle"
                    size="large"
                    invert={true}
                    color="#CCCCCC"
                />
            </div>

            <div className="SingleViewContent__author">
                {data.author}
                <span className="SingleViewContent__subreddit">
                    {subredditString}
                </span>
                <div className="SingleViewContent__toMe">to me</div>
            </div>

            <div className="SingleViewContent__created">
                {timeCreated} ({timeAgo})
            </div>
        </div>
    )
}
