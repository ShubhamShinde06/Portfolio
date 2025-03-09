const TimelineItem = ({ icon: Icon, title, institution, date, description }) => {
    return (
      <div className="relative flex items-start gap-6 group">
        {/* Timeline Icon */}
        <div className="w-[40px] h-[40px] flex items-center justify-center bg-[#202022] text-[#FDC763] rounded-xl shadow-inner">
          <Icon className="text-xl" />
        </div>
  
        {/* Timeline Content */}
        <div className="w-full">
          <h3 className="text-white font-bold text-lg">{title}</h3>
          <h4 className="text-[#CEB15A] mt-1">{institution} ({date})</h4>
          <p className="text-[#D6D6D6] text-sm mt-1 leading-relaxed">{description}</p>
        </div>
      </div>
    );
  };
  
  export default TimelineItem;
  