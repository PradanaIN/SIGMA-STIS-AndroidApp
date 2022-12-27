package com.uas.ppk.adapter;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.cardview.widget.CardView;
import androidx.recyclerview.widget.RecyclerView;

import com.uas.ppk.R;
import com.uas.ppk.response.EventResponse;

import java.util.List;

public class EventsAdapter extends RecyclerView.Adapter<EventsAdapter.EventAdapterVH> {

    private List<EventResponse> eventResponseList;
    private Context context;
    private ClickedItem clickedItem;

    public EventsAdapter(ClickedItem clickedItem) {
        this.clickedItem = clickedItem;
    }

    public void setData(List<EventResponse> eventResponseList) {
        this.eventResponseList = eventResponseList;
        notifyDataSetChanged();
    }

    @NonNull
    @Override
    public EventAdapterVH onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        context = parent.getContext();
        return new EventsAdapter.EventAdapterVH(LayoutInflater.from(context).inflate(R.layout.list_event,parent,false));
    }


    @Override
    public void onBindViewHolder(@NonNull EventAdapterVH holder, int position) {

        EventResponse eventResponse = eventResponseList.get(position);

        String namaKegiatan = eventResponse.getNamaKegiatan();
        String penyelenggaraKegiatan = eventResponse.getPenyelenggaraKegiatan();
        String kategoriKegiatan = eventResponse.getKategoriKegiatan();
//        String imageKegiatan = eventResponse.getImageKegiatan();

        holder.namaKegiatan.setText(namaKegiatan);
        holder.penyelenggaraKegiatan.setText(penyelenggaraKegiatan);
        holder.kategoriKegiatan.setText(kategoriKegiatan);
        holder.ListMain.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                clickedItem.ClickedEvent(eventResponse);
            }
        });

    }

    public interface ClickedItem{
        public void ClickedEvent(EventResponse eventResponse);
    }

    @Override
    public int getItemCount() {
        return eventResponseList.size();
    }

    public class EventAdapterVH extends RecyclerView.ViewHolder {

        CardView ListMain;
        TextView namaKegiatan, penyelenggaraKegiatan, kategoriKegiatan;
//        ImageView imageKegiatan;

        public EventAdapterVH(@NonNull View itemView) {
            super(itemView);
            namaKegiatan = itemView.findViewById(R.id.namaKegiatan);
            penyelenggaraKegiatan = itemView.findViewById(R.id.penyelenggaraKegiatan);
            kategoriKegiatan = itemView.findViewById(R.id.kategoriKegiatan);
//            imageKegiatan = itemView.findViewById(R.id.imageKegiatan);
            ListMain = itemView.findViewById(R.id.ListMain);
        }
    }
}